package com.capstone.app.models;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * Created
 */
@Entity //(name="TRACKED_DEPENDENCY ")
public class TrackedDependency {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Size(max =50)
    private String description;
   
    @Size(max = 50)
    private String notes;
    
    private boolean status;
    
    
    private String project;
    
    private String team;
    
  public TrackedDependency() {}
  
  
  

public TrackedDependency(@Size(max = 50) String description, @Size(max = 50) String notes, boolean status,
		String project, String team, Date startDate, Date endDate, @NotNull int sprintNumber, long duration,
		String ticketNumber) {
	super();
	this.description = description;
	this.notes = notes;
	this.status = status;
	this.project = project;
	this.team = team;
	this.startDate = startDate;
	this.endDate = endDate;
	this.sprintNumber = sprintNumber;
	this.duration = duration;
	this.ticketNumber = ticketNumber;
}




public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getProject() {
		return project;
	}

	public void setProject(String project) {
		this.project = project;
	}

	public String getTeam() {
		return team;
	}

	public void setTeam(String team) {
		this.team = team;
	}

	/*  @NotNull
    private String startDate;
*/    
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="MM/dd/yyyy HH:mm")
    private Date startDate;

    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="MM/dd/yyyy HH:mm")
    private Date endDate;


    @NotNull
    private int sprintNumber;

    private long duration;
    
    
    private String ticketNumber;

  

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}


	public void setSprintNumber(int sprintNumber) {
		this.sprintNumber = sprintNumber;
	}


	public void setDuration(long duration) {
		this.duration = duration;
	}


	public void setTicketNumber(String ticketNumber) {
		this.ticketNumber = ticketNumber;
	}


	public Long getId() {
        return id;
    }

    public String getDescription() { return description; }



    public Date getEndDate() { return endDate; }

    public int getSprintNumber() { return sprintNumber; }

    public long getDuration() { return duration; }

    public String getTicketNumber() { return ticketNumber; }
    
   
}